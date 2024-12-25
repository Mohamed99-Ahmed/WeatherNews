import notfound from '../../assets/imgs/notfound.svg';

export default function NotFound() {
  // not Found page
  return (
    <figure className='d-flex align-items-center justify-content-center' style={{ minHeight: '70vh' }}>
        <img src={notfound} style={{width:"350px"}} alt="not found this page" />
    </figure>
  )
}
