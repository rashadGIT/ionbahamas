export default function Button ({onClick, loading=false, loadingMsg = 'Processing', children}: any){
  return (
    <button
        onClick={onClick}
        className={`donation-button ${loading ? 'loading' : ''}`}
        disabled={loading}
        >
        {loading ? loadingMsg : children}
    </button>
  );
};
