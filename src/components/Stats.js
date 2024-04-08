export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">Start adding some items to your packing list!</p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentagePacked = ((numPacked / items.length) * 100).toFixed(1);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === "0.0"
          ? `🧳 You have ${numItems} items on your list, but have not packed any item yet`
          : percentagePacked === "100.0"
          ? "You got everything! Enjoy your travel✈️"
          : `🧳 You have ${numItems} items on your list, and you already packed 
        ${numPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
