
 export const Result = ({ result }) => {
    return (
        <p className="result">
            {!!result && (
            <>
            {result.baseAmount.toFixed(2)} PLN = 
            {""}
            <strong>
                {result.targetAmount.toFixed(2)} {result.currency}
            </strong>
            </>
            )}
        </p>
    )
 }

 