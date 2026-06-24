import SectionTitle from './Section-Title'
import TitleComponent from '../components/title.component'

export default function About () {
  return (
    <>


    <SectionTitle
              title="About"
              subtitle="Proin eu ante vel mauris molestie dignissim non eget nunc. 
        Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus."
            />
            <p className='text-gray-400 text-sm max-w-xl mx-auto mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin eu ante vel mauris molestie dignissim non eget nunc. 
                Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. 
                Ut sit amet porta sem, interdum tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.</p>

             <section className='bg-[url(https://i.pinimg.com/736x/e1/1c/fd/e11cfd07df1b5e938256233d83a0d115.jpg)] bg-fixed bg-no-repeat bg-cover
             mx-8 mt-15  '>
              <div className='h-screen bg-black/50'>
                <div className='flex flex-col md:flex-row justify-between items-center
                px-6 md:px-16 gap-10'>
                  <div className='w-full md:w-1/2 mt-20'>
                 <TitleComponent
                            Subtitle="The Mission"
                            Title="At the heart of everything, we set out to offer the best quality."
                             color="text-white"
                             
                          />
                          <div className='w-16 h-[2px] bg-white mt-10'></div>
              </div>
              <div className='md:w-1/2 w-full leading-relaxed text-white  mt-30 '>
                <p className='mb-4 font-semibold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Proin eu ante vel mauris molestie dignissim non eget nunc. 
                  Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
                   Aenean placerat facilisis ex, eu laoreet lorem convallis.
                </p>
                <p className='font-semibold text-2xl'>Fusce gravida justo a lectus tempus lacinia. Ut mollis scelerisque ultricies.
                   Aenean facilisis efficitur magna, at feugiat massa bibendum at. 
                   Etiam ut venenatis urna.</p>
                   </div>
                   </div>
              </div>
             </section>

            <section >
             <div className='text-center mb-12 space-y-8 mt-15'>
              <h2 className='text-5xl font-bold tracking-[2px]'>How it Started</h2>
              <div  className='w-16 h-[2px] bg-black mx-auto mt-3'></div>
              <p className='text-gray-500 mt-4 max-w-xl mx-auto text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className='grid md:grid-cols-2 items-center mx-20 mt-10'>
              <div className='bg-[#FAEDEB] p-20 md:p-20'>
                <h3 className='text-3xl font-semibold mb-4'>Vel mauris molestie dignissim</h3>
                <p className="font-semibold text-md mb-4">Proin eu ante vel mauris molestie dignissim non eget nunc.
                   Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
                   <p className='text-gray-600 text-sm leading-relaxed'>Praesent vel faucibus ligula. 
                    Sed sit amet ipsum eget velit aliquet faucibus. 
                    Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue.
                     Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet bibendum molestie.
                      Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugia.</p>
              </div>
              <div>
                <img src="https://i.pinimg.com/1200x/5c/af/66/5caf66ede5627161b0ad983a00b74c81.jpg" alt=""
                className='h-[412px] w-full object-cover' />
              </div>
            </div>
            </div>
            </section>

            </>

           
  )
}
