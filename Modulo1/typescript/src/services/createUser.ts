interface Languages {
  title: string,
  experience: number
}

interface CreateUserData {
  name?: string,
  email: string,
  password: string,
  techs: string[],
  languages: Array<number | Languages>
}

export default function createUser({ name, email, password, techs, languages }: CreateUserData) {

  const user = {
    name,
    email,
    password,
    techs,
    languages
  };

  return user;
}