import css from './Loader.module.css';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={css.loader}>
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#ff1b1e"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        secondaryColor="#ff1b1e"
      />
    </div>
  );
}
