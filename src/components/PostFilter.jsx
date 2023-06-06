import React from 'react';
import Select from './UI/select/Select';
import Input from './UI/input/Input';
import "../styles/App.css";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className='post-filter'>
      <Input
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder='Поиск по странице'
      />
      <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Сортировка по:'
        options={[
          { value: "name", name: "По названию" },
          { value: "created", name: "По дате добавления" },
          { value: "price", name: "По цене" }
        ]}
      />
    </div>
  );
};

export default PostFilter;