export interface AuthenticationResponse {
  readonly token: string;
  readonly username: string;
  readonly roles: string[];
}
