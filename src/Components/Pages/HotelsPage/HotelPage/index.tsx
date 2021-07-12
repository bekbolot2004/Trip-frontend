import React from 'react';


interface Params {
    params: any
}

interface Props {
    id: number,
    computedMatch: Params ,
}

const HotelPage: React.FC<Props> = ({computedMatch: {params: {id}}}) => {
    return (
        <div>
            {id}
        </div>
    );
};

export default HotelPage;