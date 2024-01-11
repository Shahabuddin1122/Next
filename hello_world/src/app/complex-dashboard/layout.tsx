export default function DashboadrdLayout({
    children,
    analysis,
    notification,
    review
}:{
    children:React.ReactNode;
    analysis: React.ReactNode;
    notification: React.ReactNode;
    review: React.ReactNode;
}) {
    return (
        <>
            <div>{children}</div>
            <p>From dashboard-layout</p>
            <div style={{display:"flex"}}>
                <div style={{ display:"flex",flexDirection:"column"}}>
                    <div>{analysis}</div>
                    <div>{review}</div>
                </div>
                <div style={{ display:"flex", flex:1}}>
                    {notification}
                </div>
            </div>
        </>
    );
}