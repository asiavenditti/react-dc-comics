
export default function Card({ title, thumb }) {
    return (
        <div className="card h-100 rounded-0 border-0">
            <img src={thumb} className="card-img-top h-60" alt={title} />
            <div className="card-body bg-dark text-white text-center">
                <h6>{title}</h6>
            </div>
        </div>
    );
}
