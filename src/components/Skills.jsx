import { useState } from "react";
import Modal from "react-modal";
import { content } from "../Content"; // Import du contenu
import { MdArrowForward } from "react-icons/md";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  // Ouvrir le modal
  const openModal = (skill) => {
    setSelectSkill(skill);
    setIsOpen(true);
  };

  // Fermer le modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectSkill(null);
  };

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        {selectSkill && (
          <div>
            <div className="flex items-center gap-2">
              <img className="h-10" src={selectSkill.logo} alt={selectSkill.name} />
              <h6>{selectSkill.name}</h6>
            </div>
            <br />
            <p>{selectSkill.para}</p>
            <br />
            <h6>Technologies:</h6>
            <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
              {selectSkill.details.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <br />
            <div className="flex justify-end">
              <button onClick={closeModal} className="btn">
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Contenu */}
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
              onClick={() => openModal(skill)} // Ouvrir le modal avec les détails de la carte
            >
              <div>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div className="text-xl absolute top-3 right-3">
                  <MdArrowForward />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
