

export default function Footer() {
  return (
      <>
      {/* Footer contain some content about me */}
        <footer className=" bg-light     py-6">
          <div className="container  d-flex flex-column-reverse gap-2 align-items-center justify-content-center">
            <p className=" text-lg fw-bold">
               &copy; الحقوق محفوظة لدي محمد احمد 2024
            </p>
            <div className="socials text-lg d-flex gap-3 fs-5 ">
              <a href="https://github.com/Mohamed99-Ahmed"  target="_blank">
                <i className="fa-brands fa-github text-xl text-dark"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/eng-mohamed-ahmed/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in text-xl text-dark"></i>
              </a>
            </div>
          </div>
        </footer>
      </>
  )
}
