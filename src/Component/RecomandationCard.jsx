const RecomandationCard = ({ getRecommandations, weather }) => {
  return (
    <div className="shadow-2xl rounded-2xl p-5">
      <h2 className="text-blue-500  font-bold text-xl">
        Smart Recommandations
      </h2>
      <div className="">{getRecommandations(weather)?.text}</div>
    </div>
  );
};

export default RecomandationCard;
