import {clients} from '../constants';
import styles from '../style';

const Clients = () => (
    <section id='clients' className={`${styles.flexCenter} `}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map ((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-32 min-w-48`}>
            <img src={client.logo} alt="client" className='sm:w-32 w-48 object-contain'/>
          </div>
        ))}

      </div>
    </section>
  )


export default Clients