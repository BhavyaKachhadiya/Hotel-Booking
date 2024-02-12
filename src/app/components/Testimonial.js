

export default function Testimonial() {
    return (
        <div className="mt-[7.5rem]">
            <div className="bg-[#FAFAFA] lg:h-[25rem]  ">
                <div className="grid lg:grid-cols-3">
                    <div className=" p-[4rem]  col-span-2">

                        <h3 className="text-[1rem] quoues relative lg:w-[40rem] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>

                        <div>
                            <h2 className="mt-[3.56rem] font-semibold text-[1.5rem]">Alexandr Ivchenko</h2>
                        </div>
                        <div>
                            <h2 className="mt-[.8rem] text-[#555555]">Businessman</h2>
                        </div>
                    </div>
                   
                        <div className='img lg:w-[27rem] w-[21.5rem] lg:h-[26rem] hidden lg:block h-[21.5rem] bg-cover overflow-hidden' style={{ backgroundImage: `url('test.jpeg')`, backgroundPosition: 'center' }}>
                        </div>
                    

                </div>
            </div>
        </div>
    );
}
