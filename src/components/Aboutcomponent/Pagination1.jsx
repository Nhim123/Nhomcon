import React from 'react';
import '../css/App.css';
import Uparrow from '/src/assets/Pagination/Uparrow.svg';

const Pagination1 = () => {
  return (
      <div className='w-full max-w-[1280px] mx-auto grid md:grid-row-3 py-16'>
          <div className='grid grid-cols-2'>
              <div className=''>
                  <h1 className='font-extrabold text-neutral-700 pb-6 text-xl font-roboto uppercase	'>giai đoạn tiền khai trương</h1>
                  <div className='grid grid-cols-2 text-wrap text-white-400 font-roboto text-lg '>
                      <h1 className='font-medium text-wrap capitalize '>Xây dựng thương hiệu uy tín, tin cậy</h1>
                      <h2 className='font-medium text-wrap capitalize text-end'>Quy trinh cung ứng chất lượng cao</h2>
                  </div>
                  <p className='font-medium text-wrap font-roboto text-lg pt-5 text-justify tracking-wide '>Bài toán khó cho mỗi nhà đầu tư trước giai đoạn hoạt động là rủi ro trong quy trình vận hành do nhân sự hạn chế trong khí hàng ngàn sản phẩm đang chờ được xác nhận. Hung Anh cung cấp các giải pháp đảm bảo rằng quá trình này sẽ diễn ra suôn sẻ và nhanh chóng</p>
                  <p className='py-4 text-xl font-roboto text-zinc-600 capitalize'>Hung Anh mang lại:</p>
                  <div className='grid grid-cols-2'>
                      <div className='flex flex-row pr-5'>
                          <img src={Uparrow}  width={30} height={30} alt="" />
                          <p className='text-2xl font-poppin text-white-400 pl-2 uppercase font-extrabold'>20% Tổng chi phí</p>
                      </div>

                      <div className='flex flex-row pr-5'>
                          <img src={Uparrow}  width={30} height={30} alt="" />
                          <p className='text-2xl font-poppin text-white-400 pl-2 uppercase font-extrabold tracking-tight'>50% thời gian</p>
                      </div>
                  </div>
              </div>


               <div className='pl-5'>
                  <h1 className='font-extrabold text-neutral-700 pb-6 text-xl font-roboto uppercase	'>giai đoạn vận hành</h1>
                  <div className='grid grid-cols-3 text-wrap text-white-400 font-roboto text-lg '>
                      <h1 className='font-medium text-wrap capitalize '>chi phí thấp</h1>
                      <h2 className='font-medium text-wrap capitalize '>giá thành cạnh tranh</h2>
                      <h2 className='font-medium text-wrap capitalize text-end'>đa dạng mẫu mã</h2>
                  </div>
                  <p className='font-medium text-wrap font-roboto text-lg pt-5 text-justify tracking-wide '>Hùng Anh mang lại những sản phẩm chất lượng, có độ bền phù hợp cho các lựợng chiến đầu phát huy vai trò của người sử dụng. Đặt uy tín của chúng tôi lên hàng đầu, cùng với đó, đảm bảo giúp khách hàng về pháp lý khi sử dụng sản phẩm</p>
                  <p className='py-4 text-xl font-roboto text-zinc-600 capitalize'>Hung Anh mang lại:</p>
                  <div className='grid grid-cols-2'>
                      <div className='flex flex-row pr-5'>
                          <img src={Uparrow}  width={30} height={30} alt="" />
                          <p className='text-2xl font-poppin text-white-400 pl-2 uppercase font-extrabold'>20% Tổng chi phí</p>
                      </div>

                      <div className='flex flex-row pr-5'>
                          <img src={Uparrow}  width={30} height={30} alt="" />
                          <p className='text-2xl font-poppin text-white-400 pl-2 uppercase font-extrabold tracking-tight'>50% thời gian</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className='font-extrabold text-neutral-700 pb-6 text-xl font-roboto uppercase pt-8 '>thế mạnh</div>
          <div className='grid grid-cols-4 space-x-5	'>
              <div className='font-medium text-wrap font-roboto text-lg text-justify'>Mạng lưới phủ sóng trên toàn thế giới tạo nền lợi thế cạnh tranh trên thị trường.</div>
              <div className='font-medium text-wrap font-roboto text-lg text-justify'>Hợp tác cùng nhiều đơn vị nước ngoài, đa dạng sản phẩm mẫu mã.</div>
              <div className='font-medium text-wrap font-roboto text-lg text-justify'>Cung cấp những dịch vụ tốt nhất đáp ứng kỳ vọng của khách hàng. </div>
              <div className='font-medium text-wrap font-roboto text-lg text-justify'>Am hiểu sâu rộng về lĩnh vực công cụ hỗ trợ và kinh nghiệm triển khai các dự án trong lĩnh vực. </div>
          </div>
      </div>
  )
}

export default Pagination1