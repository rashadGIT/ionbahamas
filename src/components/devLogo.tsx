import { NavLink } from 'reactstrap';

export default ({ text, img, link }: { text: string; img: string; link : string }) => (
    <div className="grow" key={text} style={{ textAlign: "center" }}>
        <NavLink onClick={() => window.open(link)}>
            <h4 className="skillTitle">{text}</h4>
            <img className="services" src={img} alt="" />
        </NavLink>
    </div>
);