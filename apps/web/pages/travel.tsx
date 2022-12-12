import React, { useEffect } from 'react';
import { Tabs, Table } from 'antd';
const TabPane = Tabs.TabPane;
const CompListSeat = () => {
  const dataSource = [
    {
      key: '1',
      name: '1121',
      age: 'Phim con heo',
      address: 'Beta Phạm Hùng',
    },
    {
      key: '2',
      name: '1122',
      age: 'Cuộc chiến loài khỉ',
      address: 'Beta Phạm Hùng',
    },
  ];

  const columns = [
    {
      title: 'Mã hoá đơn',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phim',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Rạp chiếu',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Suất chiếu',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ghế đã đặt',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Combo/Package',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Điểm',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </>
  );
};
export function TravelPage() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="travel !w-full flex flex-col items-center px-12">
      <Tabs
        defaultActiveKey="1"
        type="card"
        className={'w-full'}
        onChange={onChange}
      >
        <TabPane tab="Thông tin tài khoản" key={1}></TabPane>
        <TabPane tab="Thẻ thành viên"  key={2}></TabPane>
        <TabPane tab="Hành trình điện ảnh" key={3}>
          <div>
            <CompListSeat></CompListSeat>
          </div>
        </TabPane>
        <TabPane tab="Điểm Beta"  key={4}></TabPane>
        <TabPane tab="Voucher"  key={5}></TabPane>
      </Tabs>
    </div>
  );
}

export default TravelPage;
