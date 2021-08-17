// import { LinearProgress } from "@material-ui/core";
export default function PairingResults(props) {
  console.log(
    "incoming props from wine>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
    props.data
  );
  const { data } = props;

  // this creates a conditional that renders if props.data = []
  if (props.data.length === 0) {
    return (
      <div className="row">
        <div className="col-md-12 progress-container"></div>
      </div>
    );
  } else {
    console.log(data.productMatches[0]);
    return (
      <div className={"flex flex-col justify-center"}>
        <div className="row bg-gray-600 text-white">
          <h1 className={"my-16 py-16 bg-gray-400 text-4xl"}>
            Your recommendations <em className={'text-lg'}>powered by Spoonacular</em>
          </h1>
          <div
            className={"flex flew-row flex-wrap align-center justify-evenly py-20"}
          >
            <h2 className={"w-96 py-16 text-3xl "}>{data.pairingText}</h2>
            <div className={'flex flex-col bg-yellow-600 px-10 py-5'}>
                <h3 className={'text-2xl border-b-2 p-4'}>Best Wines For Your Meal</h3>
              {data.pairedWines &&
                data.pairedWines.map((pairing, idx) => {
                  return (
                    <div className="flex flex-col text-3xl p-8">
                      <h3>{data.pairedWines[idx]}</h3>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {data.productMatches &&
          data.productMatches.map((match, index) => {
            let scoreAsPercent = data.productMatches[index].score * 100;
            let score = Math.round(scoreAsPercent);
            return (
              <div key={index} className="flex flex-row flex-wrap justify-center my-20">
                  <div className="my-10 flex-col flex justify-center border-2 py-10 w-6/12 content-wine">
                      <h2>another section</h2>
                  </div>
                <div className="my-10 flex-col flex justify-center border-2 py-10 w-96">
                  <h3>
                    Try this selection! <em>brought to you by Spoonacular</em>
                  </h3>
                  <a href={data.productMatches[index].link} className="m-2">
                    <h2 className={"text-4xl my-2"}>
                      {data.productMatches[index].title}
                    </h2>
                    <img
                      src={data.productMatches[index].imageUrl}
                      className={"w-auto h-auto mx-auto my-6"}
                      alt={data.productMatches[index].title}
                    />
                  </a>
                  <h3 className={"text-xl my-2 w-72 m-auto"}>
                    {data.productMatches[index].description}
                  </h3>
                  <h5 className={"text-l my-2"}>
                    Avg Retail Price: {data.productMatches[index].price}
                  </h5>
                  <p>Rating: {score}</p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
