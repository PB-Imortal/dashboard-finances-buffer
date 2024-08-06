import CharacterNotification from "../assets/NotificationCharacter.svg";

const NotificationPage = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-[18vh]">
        <h1 className="md:text-[24px] md:mr-56 sm:ml-20 dark:text-white sm:text-[18px] smx:text-[20px] sm:mr-10">At the moment, there are no notifications.</h1>
        <img
         className="w-[260px] smx:w-[320px] md:w-[462px] md:h-[422px]"
         src={CharacterNotification} 
         alt="Personagem de notificação"
         />
    </div>

    </>
  )
}

export default NotificationPage