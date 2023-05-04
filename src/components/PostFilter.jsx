import React from 'react';
import Select from './UI/select/Select';
import Input from './UI/input/Input';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder='Поиск'
      />
      <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Сортировка по:'
        options={[
          { value: "name", name: "По названию" },
          { value: "created", name: "По дате добавления" }
        ]}
      />
    </div>
  );
};

export default PostFilter;