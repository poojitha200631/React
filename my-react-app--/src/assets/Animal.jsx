function Hello() {
  return (
    <p style={{ textAlign: "left" }}>Hello</p>
  );
}

function Galaxy(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <h4>Name: {props.name}</h4>
      <h4>Process: {props.process}</h4>
    </div>
  );
}

function Star() { 
  return (
    <Galaxy 
      name="Sun" 
      process="Nuclear Fission and Fusion" 
    />
  );
}

function Summary(props) {
  return (
    <p>
      Results-driven and highly motivated professional with expertise in XYZ skills and a strong {props.job} commitment to delivering high-quality solutions. 
      Possess excellent analytical, problem-solving, and communication abilities, with experience collaborating in team-oriented environments. 
      Quick to learn new technologies {props.company} and adapt to changing business {props.skill1} requirements. 
      Seeking an opportunity to contribute my skills {props.skill2}, {props.skill3} and grow professionally in a leading multinational company (MNC) while adding value through innovation, efficiency, and continuous improvement.
    </p>
  );
}

function Animator() {
  return (
    <Summary 
      job="Animator"
      company="Google"
      skill1="Unreal Engine"
      skill2="Blender"
      skill3="Graphic Designing"
    />
  );
}

function Animal() {
  return (
    <>
      <h1>Animals</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <p style={{ textAlign: "justify" }}>
          In 1924, Hidesaburō Ueno, an agricultural science professor at Tokyo Imperial University, adopted a golden-brown Akita puppy and named him Hachi. The two formed an incredibly tight bond. Every morning, Hachikō would walk with Professor Ueno to the Shibuya train station. When the workday ended, the devoted dog would return to the station right on time to greet his master as he got off the train.
        </p>
        <img
          style={{ width: 100 }}
          src="https://cdn.shopify.com/s/files/1/0040/8997/0777/files/ef10ba346a7b47433820509846f8bff2_1024x1024.jpg?v=1697758720"
          alt="Rabbit"
          width="350"
          height="250"
        />
      </div>
      <Hello />
      <Star />
      <Animator />
    </>
  );
}

export default Animal;
