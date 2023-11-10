import type { Participant, Room } from 'livekit-client';
import { BehaviorSubject } from 'rxjs';
export interface ChatMessage {
    timestamp: number;
    message: string;
}
export interface ReceivedChatMessage extends ChatMessage {
    from?: Participant;
}
/** @public */
export type MessageEncoder = (message: ChatMessage) => Uint8Array;
/** @public */
export type MessageDecoder = (message: Uint8Array) => ReceivedChatMessage;
export declare function setupChat(room: Room, options?: {
    messageEncoder?: (message: ChatMessage) => Uint8Array;
    messageDecoder?: (message: Uint8Array) => ReceivedChatMessage;
}): {
    messageObservable: import("rxjs").Observable<ReceivedChatMessage[]>;
    isSendingObservable: BehaviorSubject<boolean>;
    send: (message: string) => Promise<void>;
    destroy: () => void;
};
//# sourceMappingURL=chat.d.ts.map