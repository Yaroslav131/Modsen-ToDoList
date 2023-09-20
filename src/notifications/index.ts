import { NATIFICATIONS_DALAY } from '@/constants';
import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

export async function onDisplayNotification(date: Date, taskName: string,taskStatus:string) {

    const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: date.getTime() - NATIFICATIONS_DALAY * 60 * 1000,
    };

    await notifee.requestPermission()

    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });

    await notifee.createTriggerNotification(
        {
            id: '123',
            title: 'Your Task!',
            body: `${taskName} will ${taskStatus} after ${NATIFICATIONS_DALAY} minutes`,
            android: {
                channelId
            },
        },
        trigger,
    );
}