var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
const EditableContext = React.createContext(null);
const EditableRow = _a => {
  var { index } = _a,
    props = __rest(_a, ['index']);
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = _a => {
  var { title, editable, children, dataIndex, record, handleSave } = _a,
    restProps = __rest(_a, ['title', 'editable', 'children', 'dataIndex', 'record', 'handleSave']);
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    var _a;
    if (editing) {
      (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };
  const save = () =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const values = yield form.validateFields();
        toggleEdit();
        handleSave(Object.assign(Object.assign({}, record), values));
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    });
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[{ required: true, message: `${title} is required.` }]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingInlineEnd: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
const NewUsers = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      name: ' name ',
      age: ' 0  ',
      address: ' xyz  ',
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = key => {
    const newData = dataSource.filter(item => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '300px',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      editable: true,
    },
    {
      title: 'Mobile no',
      dataIndex: 'number',
      width: '40%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },  
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      name: ` new name`,
      age: '0',
      address: `xyz`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = row => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, Object.assign(Object.assign({}, item), row));
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map(col => {
    if (!col.editable) {
      return col;
    }
    return Object.assign(Object.assign({}, col), {
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    });
  });
  return (
    <div class="flex flex-row">
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>
    </div>
  );
};
export default NewUsers;