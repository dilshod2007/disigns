import React from 'react'
import Ads1 from "../../assets/Ads1.png"
import Ads2 from "../../assets/Ads2.png"
import { Radio } from 'antd';
import { Select } from 'antd';
import Switch from '../../assets/switch.png';

const Header = () => {
    const onChange = (value) => {
         
     }
     const onSearch = (value) => {
         
     }
  return (
<div className=''>
           <div className=' bg-[white] h-[auto]  flex justify-between items-center w-[1440px] py-[50px] '>
          <div>
                    <img src={Ads1} alt="" />
          </div>
          <div>
                    <img src={ Ads2} alt="" />
          </div>
         </div>
        




      <div className='flex'>
      <div className='w-[582px h-[132px] rounded-2xl bg-[white] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-[30px]'>
      <Radio>Pick - Up</Radio>
    <div className=' flex gap-[50px]   '>
    <div>
        <h3>Locations</h3>
      <Select
    showSearch className='my-[10px]'
    placeholder="Select your city"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: 'Toshkent',
        label: 'Toshkent',
      },
      {
        value: 'Samarqand',
        label: 'Samarqand',
      },
      {
        value: 'Namangan',
        label: 'Namangan',
      },
      {
        value: 'Andijon',
        label: 'Andijon',
      },{
        value: 'Qashqadaryo',
        label: 'Qashqadaryo',
      }
    ]}
  />
      </div>
      <hr className='w-[2px] h-[50px] bg-[#C4C4C4] my-[10px]' />
      <div>
        <h3>Date</h3>
        <Select
    showSearch className='my-[10px]'
    placeholder="Select date"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: ' 1 - 10',
        label: ' 1 - 10',
      },
      {
        value: '10 - 20',
        label: '10 - 20',
      },
      {
        value: '20 - 30',
        label: '20 - 30',
      },
    ]}
  />
      </div>
      <hr className='w-[2px] h-[50px] bg-[#C4C4C4] my-[10px]' />

      <div>
        <h3>Time</h3>
        <Select
    showSearch className='my-[10px]'
    placeholder="Select time"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: '10:00',
        label: '10:00',
      },
      {
        value: '11:00',
        label: '11:00',
      },
      {
        value: '12:00',
        label: '12:00',
      },
    ]}
  />
      </div>
    </div>
   </div>
 <div>
    <img className='my-[40px] w-[102px]' src={Switch} alt="" />
 </div>
   <div className='w-[582px h-[132px] rounded-3xl bg-[white] shadow-lg p-[30px]'>
   <Radio className=''>Drop - Off</Radio>
  
   <div className=' flex gap-[50px]   '>
    <div>
        <h3>Locations</h3>
      <Select
    showSearch className='my-[10px]'
    placeholder="Select your city"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: 'Toshkent',
        label: 'Toshkent',
      },
      {
        value: 'Samarqand',
        label: 'Samarqand',
      },
      {
        value: 'Namangan',
        label: 'Namangan',
      },
      {
        value: 'Andijon',
        label: 'Andijon',
      },{
        value: 'Qashqadaryo',
        label: 'Qashqadaryo',
      }
    ]}
  />
      </div>
      <hr className='w-[2px] h-[50px] bg-[#C4C4C4] my-[10px]' />
      <div>
        <h3>Date</h3>
        <Select
    showSearch className='my-[10px]'
    placeholder="Select date"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: ' 1 - 10',
        label: ' 1 - 10',
      },
      {
        value: '10 - 20',
        label: '10 - 20',
      },
      {
        value: '20 - 30',
        label: '20 - 30',
      },
    ]}
  />
      </div>
      <hr className='w-[2px] h-[50px] bg-[#C4C4C4] my-[10px]' />

      <div>
        <h3>Time</h3>
        <Select
    showSearch className='my-[10px]'
    placeholder="Select time"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: '10:00',
        label: '10:00',
      },
      {
        value: '11:00',
        label: '11:00',
      },
      {
        value: '12:00',
        label: '12:00',
      },
    ]}
  />
      </div>
    </div>
  </div>

   




  </div>

  
</div>
  )
}

export default Header