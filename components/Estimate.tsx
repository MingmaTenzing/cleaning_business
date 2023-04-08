type Props = {}
function Estimate({}: Props) {
  return (
    <div className=" -z-20 relative mt-20 bg-[url('https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]  h-[500px] max-w-full object-center bg-center bg-no-repeat  object-cover  flex flex-col items-center justify-center"  >
        <div className="absolute w-full h-full bg-black opacity-40  -z-10">

        </div>

        <div>
            <h1 className=" text-3xl font-bold text-center text-white">Let's Find A Estimate On Your Project</h1>
        </div>

        <div className="flex justify-center items-center">
        <form className="z-30">
            <div>

            <label className="text-white">Name</label>
            <input type="text"  required/>

            </div>
            <div>

            <label>Name</label>
            <input type="text"  required/>

            </div>

            </form>

        </div>

    </div>
  )
}
export default Estimate