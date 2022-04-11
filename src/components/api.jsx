import { useState, useEffect } from "react";
function FetchApi(props) {
  const url = `https://pokeapi.co/api/v2/pokemon/${props.id}`;
  const [data, setData] = useState([]);
  const [img, setImg] = useState();

  const getData = () => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData([json]);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        {data.map(datas => (
          <div key={datas.id} className="modalStorage">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
              alt="none"
              height={250}
              width={250}
              className="modalIMG"
            />
            <div className="textContainer">
              <h1>{datas.name}</h1>
              <p>{datas.types[0].type.name}</p>
              {/* <p>{datas ? datas.types[1].type.name : null}</p> */}
              {/* <p>
                {() => {
                  if (datas.types[1].type.name != null) {
                    return datas.types[1].type.name;
                  }
                }}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FetchApi;
