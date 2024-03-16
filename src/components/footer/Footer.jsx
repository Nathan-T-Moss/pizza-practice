import Order from "../order/Order";

export default function Footer () {
    
    let currentTime = new Date().getHours()
    
    return (
        <footer className='footer'>
            {10 <= currentTime <= 22 ? <Order/> : <p>We're closed, we welcome you to return between 10:00 AM and 10:00 PM.</p>}
        </footer>
    );
}