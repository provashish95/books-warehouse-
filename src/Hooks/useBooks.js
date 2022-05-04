import React, { useEffect, useState } from 'react';

const useBooks = (url) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    return books;
};

export default useBooks;