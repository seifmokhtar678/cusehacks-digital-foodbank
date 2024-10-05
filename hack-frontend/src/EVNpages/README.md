scss allows you to customize each page, component, so the css doesn't cross into other pages

cant link links n imgs

const Cards = (props) => {
return (

<div className=" row g-3 container-sm col-12 col-md-6 col-lg-4">
<div className="card">
<img
          src="/IMG/img/modelY.jpeg"
          className="card-img-top"
          alt="PLACEHOLDER IMG"
        />
<div className="card-body">
<h5 className="card-title">{props.title}</h5>
<p className="card-text">{props.text}</p>
<Link to="/EVBenefits" className="btn btn-primary">
Learn
</Link>
</div>
</div>
</div>
);
};

<div className="row">
<Cards
          text=" What are the benefits to owning an EV?"
          title="EV Benefits"
        />
<Cards
          text=" What should I know about charging my vehicle?"
          title="Charging"
          link=""
        />
<Cards
          text="Terms and Vocabulary to help you get a deeper understanding of
                the EV World"
          title="Terms"
        />
</div>
