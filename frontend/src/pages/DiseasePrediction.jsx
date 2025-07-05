import  { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const DiseasePrediction = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch available symptoms on mount
  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/disease/symptoms`);
        if (res.data.success) {
          setSymptoms(res.data.symptoms);
        } else {
          toast.error(res.data.message || 'Failed to fetch symptoms');
        }
      } catch {
        toast.error('Error fetching symptoms');
      }
    };
    fetchSymptoms();
  }, [backendUrl]);

  // Filter symptoms based on search
  const filteredSymptoms = symptoms.filter(symptom =>
    symptom.toLowerCase().includes(search.toLowerCase()) && !selectedSymptoms.includes(symptom)
  );

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedSymptoms.length === 0) {
      toast.error('Please select at least one symptom');
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post(
        `${backendUrl}/api/disease/predict`,
        { symptoms: selectedSymptoms },
        { headers: { token } }
      );
      if (res.data.success) {
        const pred = res.data.prediction;
        setResult({
          disease: pred.prediction,
          description: pred.disease_info?.description,
          precautions: pred.disease_info?.precautions
        });
      } else {
        toast.error(res.data.message || 'Prediction failed');
      }
    } catch {
      toast.error('Error predicting disease');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-4 sm:mx-[10%] my-8">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 text-center">Disease Prediction</h2>
        <p className="text-gray-600 mb-6 text-center">Select your symptoms and get a prediction for possible diseases, along with description and precautions.</p>
        <form onSubmit={handleSubmit}>
          {/* Searchable Add/Remove List */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search symptoms..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {/* Selected symptoms as chips */}
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedSymptoms.map((symptom, idx) => (
                <span key={idx} className="flex items-center bg-primary text-secondary rounded-full px-3 py-1 text-sm font-medium">
                  {symptom}
                  <button
                    type="button"
                    onClick={() => setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom))}
                    className="ml-2 text-secondary hover:text-red-600 focus:outline-none"
                    aria-label={`Remove ${symptom}`}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            {/* Filtered symptoms list */}
            <div className="max-h-40 overflow-y-auto border border-gray-200 rounded bg-gray-50">
              {filteredSymptoms.length > 0 ? (
                filteredSymptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 cursor-pointer hover:bg-primary/30 text-gray-700 text-sm"
                    onClick={() => {
                      setSelectedSymptoms([...selectedSymptoms, symptom]);
                      setSearch("");
                    }}
                  >
                    {symptom}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-400 text-sm">No symptoms found</div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-secondary font-semibold py-2 rounded-lg shadow hover:bg-secondary hover:text-white transition"
            disabled={loading}
          >
            {loading ? 'Predicting...' : 'Predict Disease'}
          </button>
        </form>
        {result && (
          <div className="mt-8 bg-primary/10 border border-primary rounded-lg p-6 text-secondary">
            <h3 className="text-xl font-bold mb-2">Prediction Result</h3>
            <p className="mb-1"><span className="font-semibold">Disease:</span> {result.disease}</p>
            <p className="mb-2"><span className="font-semibold">Description:</span> {result.description}</p>
            <div>
              <span className="font-semibold">Precautions:</span>
              <ul className="list-disc ml-6 mt-1">
                {Array.isArray(result.precautions)
                  ? result.precautions.map((prec, i) => (
                      <li key={i}>{prec}</li>
                    ))
                  : <li>{result.precautions}</li>
                }
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasePrediction; 