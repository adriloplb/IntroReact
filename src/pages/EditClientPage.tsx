import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const EditClientPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Editar cliente</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen />
  </IonPage>
);

export default EditClientPage;
