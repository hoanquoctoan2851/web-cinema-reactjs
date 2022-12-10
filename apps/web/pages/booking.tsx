import { Breadcrumb, Button, Table, Space, InputNumber } from 'antd';
import { TagOutlined, ClockCircleOutlined, UserOutlined, FolderOutlined } from "@ant-design/icons"
import { useEffect, useState } from 'react';
const urlScreen = '/assets/ic-screen.png'
const CompTitleChangeColor = () => {
  return (
    <div
      className={
        'background-title-change-color w-full h-[40px] flex items-center justify-center mt-8'
      }
    >
      <p className={'text-xs'}>
        Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 16
        tuổi.
      </p>
    </div>
  );
};
const CompListSeat = () => {
  const listSeat = [
    {
      url: '/assets/seat_unselect_normal.png',
      name: 'Ghế trống',
    },
    {
      url: '/assets/seat-select-normal.png',
      name: 'Ghế đang chọn',
    },
    {
      url: '/assets/seat-process-normal.png',
      name: 'Ghế đang được giữ',
    },
    {
      url: '/assets/seat-buy-normal.png',
      name: 'Ghế đã bán',
    },
    {
      url: '/assets/seat-set-normal.png',
      name: 'Ghế đặt trước',
    },
  ];
  const RenderListSeat = () => {
    const ListSeat = listSeat.map((seat) => {
      return (
        <>
          <div className={'flex flex-row gap-1 w-full flex-wrap items-center'}>
            <img className={'w-6 h-6 cursor-pointer'} src={seat.url} />
            <p className={'font-semibold text-xs'}>{seat.name}</p>
          </div>
        </>
      );
    });
    return ListSeat;
  };
  useEffect(() => {
    RenderListSeat();
  }, []);
  return (
    <>
      <div className={'flex flex-row gap-2 mt-4 justify-between w-full'}>
        {RenderListSeat()}
      </div>
    </>
  );
};
const CompHandleSeat = ({ char, length }) => {
  const vipSeat = `url(/assets/vip_seat.png)`;
  const nomalSeat = 'url(/assets/seat_unselect_normal.png)';
  const [numberSeat, seNumberSeat] = useState([]);
  const myStyle = {
    backgroundImage: ['A', 'B', 'C', 'D'].includes(char) ? nomalSeat : vipSeat,
    backgroundSize: 31,
  };
  const getLenghtSeat = () => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(i + 1);
    }
    seNumberSeat(arr);
  };
  useEffect(() => {
    getLenghtSeat();
  }, [length]);
  const rowSeat = numberSeat.map((arr) => {
    return (
      <>
        <div
          style={myStyle}
          key={numberSeat.indexOf(arr)}
          className={'w-8 h-8 mx-1 cursor-pointer flex'}
        >
          <p
            key={arr}
            className={'m-auto text-black text-xs'}
          >{`${char}${arr}`}</p>
        </div>
      </>
    );
  });
  return <div className={'flex flex-row justify-between'}>{rowSeat}</div>;
};
const RenderTableSeat = () => {
  const listChar = [
    {
      char: 'A',
      amount: 18,
    },
    {
      char: 'B',
      amount: 18,
    },
    {
      char: 'C',
      amount: 18,
    },
    {
      char: 'D',
      amount: 18,
    },
    {
      char: 'E',
      amount: 18,
    },
    {
      char: 'F',
      amount: 16,
    },
    {
      char: 'G',
      amount: 16,
    },
    {
      char: 'H',
      amount: 16,
    },
    {
      char: 'I',
      amount: 15,
    },
    {
      char: 'J',
      amount: 14,
    },
    {
      char: 'K',
      amount: 18,
    },
  ];
  const listSeat = listChar.map((item) => {
    return(
      <CompHandleSeat key={item.char} char={item.char} length={item.amount}></CompHandleSeat>
    )
  })
  return (
    <>
      <div className={"mt-6"}>
        <div>
          <img src={urlScreen}/>
        </div>
        <div className={'flex justify-center items-center flex-col mt-6 w-full'}>
          {listSeat}
        </div>
      </div>
    </>
  )
};
const CompPoster = ({isCombo, setIsCombo}) => {
  const RenderButton = () => {
    if(isCombo) {
      return (
        <Button onClick={() => {setIsCombo(false)}} className={"m-auto bg-blue-500"} type="primary">
          Tiếp tục
        </Button>
      )
    }
    return (
      <Button onClick={() => {setIsCombo(true)}} className={"m-auto bg-blue-500"} type="primary">
        Trở lại
      </Button>
    )
  }
  return(
    <>
      <div className={"h-full w-full h-full"}>
        <div className={"w-full h-2/3 flex flex-row border-b-cyan-300"}>
          <div className={"w-1/2 h-full flex flex-col pb-4 justify-between"}>
            <img src={"https://files.betacorp.vn/files/media/images/2022/11/15/dem-hung-tan-113700-151122-86.jpg"}/>
            <div>
              <div className={"flex flex-row items-center mb-6"}>
                <TagOutlined />
                <p  className={"ml-1"}>Thể loại</p>
              </div>
              <div className={"flex flex-row items-center"}>
                <ClockCircleOutlined />
                <p className={"ml-1"}>Thời Lượng</p>
              </div>
            </div>
          </div>
          <div className={"w-1/2 h-full p-4 flex-col flex justify-between"}>
            <div className={"mt-8"}>
              <p className={"text-xl text-blue-800 font-semibold"}>Đêm Hung Tàn</p>
              <p className={"font-medium text-black"}>2D phụ đề</p>
            </div>
            <div className={"font-semibold"}>
              <p className={"mb-6"}>Hài hước, hành động</p>
              <p>118 phút</p>
            </div>
          </div>
        </div>
        <div className={"flex flex-col gap-4"}>
          <div className={"flex px-4 flex-row justify-between"}>
            <div className={"flex flex-row items-center gap-2"}>
              <FolderOutlined />
              <p>Rạp</p>
            </div>
            <p  className={"font-semibold mr-10"}>Beta Thái Nguyên</p>
          </div>
          <div className={"flex px-4 flex-row justify-between"}>
            <div className={"flex flex-row items-center gap-2"}>
              <FolderOutlined />
              <p>Giờ chiếu</p>
            </div>
            <p  className={"font-semibold mr-10"}>Beta Thái Nguyên</p>
          </div>
          <div className={"flex px-4 flex-row justify-between"}>
            <div className={"flex flex-row items-center gap-2"}>
              <FolderOutlined />
              <p>Phòng chiếu</p>
            </div>
            <p  className={"font-semibold mr-10"}>Beta Thái Nguyên</p>
          </div>
          <div className={"flex px-4 flex-row justify-between"}>
            <div className={"flex flex-row items-center gap-2"}>
              <FolderOutlined />
              <p>Ghế ngồi</p>
            </div>
            <p  className={"font-semibold mr-10"}>Beta Thái Nguyên</p>
          </div>
          <div className={"flex px-4 flex-row justify-between"}>
            <div className={"flex flex-row items-center gap-2"}>
              <ClockCircleOutlined />
              <p>Giờ chiếu</p>
            </div>
            <p  className={"font-semibold mr-10"}>Beta Thái Nguyên</p>
          </div>
          <div className={"flex px-4 flex-row justify-between"}>
            <p>Ngày chiếu</p>
            <p  className={"font-semibold mr-10"}>Beta Thái Nguyên</p>
          </div>
        </div>
        <div className={"w-full flex mt-4"}>
          <RenderButton></RenderButton>
        </div>
      </div>
    </>
  )
}
const SelectOptionBooking = () => {
  const [valueCombo_1, setCombo_1] = useState<number>(0)
  const [valueCombo_2, setCombo_2] = useState<number>(0)

  const dataSource = [
    {
      key: '1',
      name: 'Family Combo 69oz',
      desc: 'TIẾT KIÊM 55K SO VỚI MUA LẺ!!! 2 bắp 69oz + 4 nước có ga 22oz + 2 snack oishi',
      amount: valueCombo_1,
    },
    {
      key: '2',
      name: 'Sweet Combo 69oz',
      desc: 'TIẾT KIỆM 30K SO VỚI MUA LẺ!!! 1 bắp 69oz + 2 nước có ga 22oz',
      amount: valueCombo_2,
    },
  ];

  const columns = [
    {
      title: 'Tên Combo',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => (
        <>
          <Space>
            <InputNumber  min={0} max={10} value={amount} onChange={(value) => setCombo_1(value)} />
          </Space>
        </>
      )
    },
  ];
  return (
    <>
      <div className={"selectOptionBooking w-full mt-8 border-b-gray-800 border-b pb-2 min-w-[720px]"}>
        <div>
          <div className={"flex flex-row items-center mb-4"}>
            <UserOutlined className={" w-8 h-8 flex items-center justify-center border-2 border-black rounded-full"} />
            <p className={"font-medium text-xl"}>Thông tin cá nhân</p>
          </div>
          <div className={"font-semibold flex flex-row justify-between"}>
            <div>
              <p>Họ tên:</p>
              <p className={"font-medium"}>Hoàng Văn Tú</p>
            </div>
            <div>
              <p>Số điện thoại</p>
            </div>
            <div>
              <p>Email:</p>
              <p className={"font-medium"}>vantuhoang@gmail.com</p>
            </div>
          </div>
          <div className={"flex flex-row justify-between font-semibold mt-4"}>
            <p>Ghế Vip</p>
            <div className={"flex flex-row gap-2"}>
              <p>2x45.000</p>
              <p>= 90.000 vnđ</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"mt-4"}>
        <div className={"flex flex-row items-end mb-8"}>
          <img className={"w-8 h-8"} src={'/assets/ic-combo.png'}/>
          <p className={"text-xl"}>COMBO ƯU ĐÃI</p>
        </div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </>
  )
}
const HanleSetPageOption = ({isSetCombo}) => {
    if(isSetCombo) {
      return (
        <>
          <CompListSeat></CompListSeat>
          <RenderTableSeat></RenderTableSeat>
        </>
      )
    }
    return (
      <SelectOptionBooking></SelectOptionBooking>
    )
}
export function BookingPage() {
  const [isSetCombo, setIsCombo] = useState(true)
  return (
    <div className="module-booking !w-full flex flex-row px-12">
      <div className={'booking-left w-full flex flex-col items-start pr-8'}>
        <div>
          <Breadcrumb className={'font-medium text-2xl'} separator={'>'}>
            <Breadcrumb.Item className={'!text-blue-500'} href="/protected">
              <span>TRANG CHỦ</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className={'!text-blue-500'} href="/protected">
              <span>PHIM</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={'!text-blue-500 font-bold cursor-pointer'}
            >
              ĐÊM HUNG TÀN
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <CompTitleChangeColor></CompTitleChangeColor>
        <HanleSetPageOption isSetCombo={isSetCombo}></HanleSetPageOption>
      </div>
      <div className={'min-w-[400px] bg-white h-screen'}>
        <CompPoster isCombo={isSetCombo} setIsCombo={setIsCombo}></CompPoster>
      </div>
    </div>
  );
}

export default BookingPage;
