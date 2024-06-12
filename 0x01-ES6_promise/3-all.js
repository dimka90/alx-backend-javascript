import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise = uploadPhoto();
  promise
    .then((value) => {
      process.stdout.write(value.body);
      return createUser();
    })
    .then((value) => {
      console.log(` ${value.firstName} ${value.lastName}`);
    })
    .catch(() => 'Signup system offline');
}
