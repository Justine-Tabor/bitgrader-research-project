export default function LogoutModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-full max-w-sm p-6 shadow-lg">

        <h3 className="text-lg font-semibold mb-2">
          Log out?
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          You will be redirected to the login page.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Log out
          </button>
        </div>

      </div>
    </div>
  )
}
