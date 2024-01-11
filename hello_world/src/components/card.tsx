export default function card({children}:{children:React.ReactNode}) {
    const sty = {
        margin:"10px",
        padding: "10px",
        border: "1px solid red",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
        <>
            <div style={sty}>
                {children}
            </div>
        </>
    )
}