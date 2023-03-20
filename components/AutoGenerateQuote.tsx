export default function AutoGenerateQuote() {
  const autoGenerateQuote = async () => {
    const quote = await fetch(`/api/auto-quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(quote);
  };

  return <button onClick={autoGenerateQuote}>Generate Quote</button>;
}
