import React from 'react'


function HeaderContainer() {
      
      const onEnter = (e: MouseEvent) => {
            gsap.to(e.currentTarget, { backgroundColor: "rgb(50, 6, 3, 0.8)" });
      };      
      const onLeave = (e: MouseEvent) => {
      gsap.to(e.currentTarget, { backgroundColor: "rgba(30,30,30,0.66)" });
      };

  return (
    <>
      <Start ref={startRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <span ref={startTextRef}>
            <img src="/logoChillCatSolutionsv2.png" alt="logo" height="100px" width="80px" />
          </span>
      </Start>
      <FirstPipe ref={firstPipeRef} />
      <MainTitle ref={mainTitleRef}>ChillCat</MainTitle>
      <SecondaryTitle ref={secondaryTitleRef}>Solutions</SecondaryTitle>
      <nav>
      <ul>
      <li> <a href="#">Inicio</a> </li>
      </ul>
      </nav>
    </>
  )
}

export default HeaderContainer