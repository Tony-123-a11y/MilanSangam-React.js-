import { Search, ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";
import SearchFilters from "./SearchFilter";
import { Link } from "react-router-dom";

export default function SearchContent() {
  const [results, setResults] = useState([]);
  const formRef = useRef();

  const handleSearch = async (filters) => {
    console.log("Received Filters in Parent:", filters);

    //   API Call yaha hogi
    /*
    const response = await searchProfilesService(filters);
    if (response.data.success) {
      setResults(response.data.matches);
    }
    */

    // Dummy result for now
    setResults([
      {
        id: 1,
        name: "Anshika Singh",
        city: "Lucknow",
        match: "86%",
      },
    ]);
  };

  return (
    <div className="space-y-6 bg-white px-6 py-4 shadow-sm max-lg:w-full max-lg:mt-18 max-lg:pb-22">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to={"/profile"} className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Find Your Match
          </h1>
        </div>

        {/* Search Button Top Right */}
        <button
          onClick={() => formRef.current?.requestSubmit()}
          className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg font-semibold"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Filters */}
        <SearchFilters onSearch={handleSearch} formRef={formRef} />

        {/* Results */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-5">

          {results.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <Search size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">
                Use the filters to find your perfect match
              </p>
              <p className="text-sm">
                Adjust your search criteria to see potential matches
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {results.map((user) => (
                <div
                  key={user.id}
                  className="p-4 border rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.city}</p>
                  </div>
                  <span className="text-amber-600 font-semibold">
                    {user.match}
                  </span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
