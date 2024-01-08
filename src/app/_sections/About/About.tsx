import Button from '@/app/components/Buttons/Button';
import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-radiant pt-20 pl-40 pr-40 min-h-[929px]'>
      <div className='grid grid-cols-2 grid-flow-row auto-rows-max'>
        <div className='max-w-[777px]'>
          <h2 className='title-primary mb-10'>A propos de moi !</h2>
          <p className='mb-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante
            purus, fringilla vel purus a, facilisis suscipit nisi. Nam nibh
            lacus, fringilla ac molestie eget, dapibus et nisl. Nulla facilisi.
            Vestibulum ac euismod lectus, nec cursus urna. Duis condimentum
            scelerisque neque, id ultricies magna. <br />
            <br />
            Nulla lobortis varius tellus id fringilla. Etiam gravida dictum
            venenatis. facilisis suscipit nisi. Nam nibh lacus, fringilla ac
            molestie eget, dapibus et nisl. Nulla facilisi. Vestibulum ac
            euismod lectus, nec cursus urna. Duis condimentum scelerisque neque,
            id ultricies magna. Nulla lobortis varius tellus id fringilla. Etiam
            gravida dictum venenatis.
          </p>
          <div className='flex gap-4 mb-16'>
            <Button
              content='Contacter moi'
              url='#'
              listClass='bg-primary-green'
            />
            <Button content='Mon cv' url='#' listClass='bg-secondary-green' />
          </div>
          <div>
            <h2>Mes differents réseaux !</h2>
          </div>
        </div>
        <div className='flex justify-center'>
          <Image src='/alicia.png' alt='alicia' width={428} height={582} />
        </div>
      </div>
    </div>
  );
};

export default About;
