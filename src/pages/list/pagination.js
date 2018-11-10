import React, { Component } from 'react';

const Pagination = ({onNext, onPrev, page, total, perPage}) => (
    <div className="pagination">
        <button disabled={page===0} onClick={onPrev}>Prev 100</button>
        <button disabled={total <= (page * perPage + perPage)} onClick={onNext}>Next 100</button>
    </div>
)

export default Pagination