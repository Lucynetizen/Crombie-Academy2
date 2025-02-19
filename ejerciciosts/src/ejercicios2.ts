interface Person {
    nombre : string;
    edad: number;
}

interface Profesor extends Person {
    subjects: string[]
    yearsOfExperience: number;
} 

interface Alumno extends Person {
    dni: string;
    subjects: string[];
    faltas: number;
    profesor: Profesor | null;
}

const profesores: Profesor[] = [];

const alumnos: Alumno[] = [];

function crearProfesor(nombre: string, edad: number, materias: string[], experiencia: number): Profesor {
    const profesor: Profesor = {
        nombre,
        edad,
        subjects: materias,
        yearsOfExperience: experiencia
    };
    profesores.push(profesor);
    return profesor;
}

function actualizarExperiencia(nombreProfesor: string, nuevaExperiencia: number): void {
    const profesor = profesores.find(p => p.nombre === nombreProfesor);
    if (profesor) {
        profesor.yearsOfExperience = nuevaExperiencia;
    } else {
        console.log("Profesor no encontrado");
    }
}

function agregarMaterias(nombreProfesor: string, nuevasMaterias: string[]): void {
    const profesor = profesores.find(p => p.nombre === nombreProfesor);
    if (profesor) {
        profesor.subjects = [...new Set([...profesor.subjects, ...nuevasMaterias])];
    } else {
        console.log("Profesor no encontrado");
    }
}

const profesorMath = crearProfesor("Pitágoras de Samos", 35, ["Matemáticas", "Física"], 8);
actualizarExperiencia("Pitágoras de Samos", 10);
agregarMaterias("Pitágoras de Samos", ["Álgebra"]);

const ProfesorLengua = crearProfesor("Edgar Allan Poe", 40, ["Lengua", "Literatura"], 20);
actualizarExperiencia("Edgar Allan Poe", 25);
agregarMaterias("Edgar Allan Poe", ["Poesía"]);

const ProfesorAstrofísica = crearProfesor("Neil deGrasse Tyson", 56, ["Astrofísica", "Física"], 29);
actualizarExperiencia("Neil deGrasse Tyson", 30);
console.log(profesores);

function crearAlumno(
    nombre: string,
    edad: number,
    dni: string,
    materias: string[],
    nombreProfesor: string
): Alumno {
    const profesor = profesores.find(p => p.nombre === nombreProfesor);
    const alumno: Alumno = {
        nombre,
        edad,
        dni,
        subjects: materias,
        faltas: 0,
        profesor: profesor || null
    };
    alumnos.push(alumno);
    return alumno;
}

function verificarFaltas(dni: string): string {
    const alumno = alumnos.find(a => a.dni === dni);
    if (!alumno) {
        return "Alumno no encontrado";
    }
    
    if (alumno.faltas > 20) {
        return `El alumno ${alumno.nombre} quedó libre por superar las 20 faltas (tiene ${alumno.faltas} faltas)`;
    }
    
    return `El alumno ${alumno.nombre} tiene ${alumno.faltas} faltas`;
}

const alumno1 = crearAlumno("Pepita Hernández", 18, "12345678", ["Matemáticas"], "Pitágoras de Samos");
alumno1.faltas = 22;
console.log(verificarFaltas("12345678"));

const alumno2 = crearAlumno("Rogelio Benítez", 17, "987654321", ["Poesía"], "Edgar Allan Poe");
alumno2.faltas = 4;
console.log(verificarFaltas("987654321"));

const alumno3 = crearAlumno("Pablito Roca", 25, "134679852", ["Astrofísica"], "Neil deGrasse Tyson");
alumno3.faltas = 2;
console.log(verificarFaltas("134679852"));