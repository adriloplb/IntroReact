import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const NewClientPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Nuevo cliente</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen />
  </IonPage>
);

export default NewClientPage;
