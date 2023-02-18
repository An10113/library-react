import React from "react";

const Price =({originalPrice, salePrice}) =>{
    return(
        <div className="book__price">
            {salePrice !== null ?
            (<>
            <span className="book__price--normal">{originalPrice}$</span>{salePrice}$
            </>
            ): (
                <>{originalPrice}$</>
            )}
        </div>
    )
}

export default Price