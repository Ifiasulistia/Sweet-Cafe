const { useState } = React;

function App() {
  const [login, setLogin] = useState(false);
  const [delivery, setDelivery] = useState("tempat");
  const [ratingFood, setRatingFood] = useState(0);
  const [ratingService, setRatingService] = useState(0);

  const menu = [
    { name: "Strawberry Latte", price: "Rp25.000", img: "https://i.imgur.com/6YV0J7Y.jpg" },
    { name: "Chocolate Milk", price: "Rp22.000", img: "https://i.imgur.com/Jt7yYQZ.jpg" },
    { name: "Cupcake Strawberry", price: "Rp18.000", img: "https://i.imgur.com/4bZQZ8L.jpg" },
    { name: "Donat Pink", price: "Rp15.000", img: "https://i.imgur.com/w1dQ4ZK.jpg" }
  ];

  if (!login) {
    return (
      <div className="container">
        <div className="card">
          <h2>Login Sweet Café</h2>
          <input placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={() => setLogin(true)}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>Sweet Café</h1>
        <p className="tagline">Delicious & Cozy</p>
      </header>

      <div className="container">
        <h2>Menu</h2>
        <div className="menu-grid">
          {menu.map((item, i) => (
            <div className="card menu-item" key={i}>
              <img src={item.img} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Pesan</button>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Pemesanan</h2>
          <textarea placeholder="Catatan pesanan"></textarea>
          <select onChange={(e) => setDelivery(e.target.value)}>
            <option value="tempat">Pesan di Tempat</option>
            <option value="delivery">Delivery Order</option>
          </select>

          {delivery === "delivery" && (
            <>
              <input placeholder="Alamat Lengkap" />
              <input placeholder="No. Telepon" />
            </>
          )}
        </div>

        <div className="card">
          <h2>Bukti Pembayaran</h2>
          <input type="file" />
        </div>

        <div className="card">
          <h2>Rating</h2>
          <p>Makanan</p>
          <div className="rating">
            {[1,2,3,4,5].map(n => (
              <span key={n} onClick={() => setRatingFood(n)}>
                {n <= ratingFood ? '⭐' : '☆'}
              </span>
            ))}
          </div>

          <p>Customer Service</p>
          <div className="rating">
            {[1,2,3,4,5].map(n => (
              <span key={n} onClick={() => setRatingService(n)}>
                {n <= ratingService ? '⭐' : '☆'}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
