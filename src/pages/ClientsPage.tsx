import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ClientsPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Clientes</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen />
  </IonPage>
);

export default ClientsPage;
