
import { useEffect, useState } from "react";
import "./App.css";

/* ---------- STATIC DATA ---------- */
const placeData = {
  name: "Cafe Good Vibes",
  rating: 4.3,
  reviews: 128,
  address: "2nd Floor, MG Road, Bengaluru, Karnataka",
  timings: {
    Monday: "9:00 AM – 10:00 PM",
    Tuesday: "9:00 AM – 10:00 PM",
    Wednesday: "9:00 AM – 10:00 PM",
    Thursday: "9:00 AM – 10:00 PM",
    Friday: "9:00 AM – 11:00 PM",
    Saturday: "9:00 AM – 11:00 PM",
    Sunday: "10:00 AM – 10:00 PM",
  },
  photos: [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  ],
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showTimings, setShowTimings] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <div className="page">
      <div className="container">
        
        {/* MAP PLACEHOLDER */}
        <div className="map">
          Map View
        </div>

        {/* PLACE DETAILS PANEL */}
        <div className="panel">
          {loading ? (
            <div className="skeleton">
              <div className="line title"></div>
              <div className="line small"></div>
              <div className="line"></div>
              <div className="box"></div>
            </div>
          ) : (
            <>
              <h1>{placeData.name}</h1>

              <div className="rating">
                ⭐ {placeData.rating}
                <span>({placeData.reviews} reviews)</span>
              </div>

              <p className="address">{placeData.address}</p>

              {/* TIMINGS */}
              <div className="timings">
                <button onClick={() => setShowTimings(!showTimings)}>
                  {showTimings ? "Hide timings" : "Show timings"}
                </button>

                {showTimings && (
                  <div className="timings-list">
                    {Object.entries(placeData.timings).map(
                      ([day, time]) => (
                        <div key={day} className="timing-row">
                          <strong>{day}</strong>
                          <span>{time}</span>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* PHOTOS */}
              <div className="photos">
                <h3>Photos</h3>
                <div className="photo-grid">
                  {placeData.photos.map((img, index) => (
                    <img key={index} src={img} alt="place" />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
