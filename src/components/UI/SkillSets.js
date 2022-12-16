import React, { useRef, useEffect } from "react";
import Typed from "typed.js"
import classes from "./SkillSets.module.css"

const SkillSets = () => {

  const typed = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    const skillSets = ["Javascript", "Typescript", "Node Js", "Express Js", "React Js", "Mongo Db", "SQL", "Mysql", "PostgresQl", "GraphQl", "Embedded Javascript (EJS)", "Handle Bars (HBS)", "Mongoose ORM", "Sequelize ORM", "Knex ORM"]

    const options = {
      strings: skillSets,
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true

    };

    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);


  return (
    <div className="type-wrap">
      <span className={classes.skills} style={{ whiteSpace: 'pre' }} ref={el} /> <br />
    </div>
  );
};

export default SkillSets;
