function Quotes(props) {
  return (
    <>
      {/*console.log(props.Randomquotes.quotes)*/}
      {props.Randomquotes.quotes.map((quote, index) => {
        return (
          <div
            key={index}
            id="wrapper"
            className="wrapper p-5 w-full h-auto border my-5 shadow-md bg-orange-50"
          >
            <div id="box" className="box">
              <p className="text-center font-serif text-2xl hover:text-blue-500 cursor-pointer">
                {quote.quote}
              </p>
              <p className="mt-3 text-center hover:text-amber-500">
                {quote.author}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Quotes;
